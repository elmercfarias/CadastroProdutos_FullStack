package br.elmer.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;

import br.elmer.exception.ResourceNotFoundException;
import br.elmer.model.Produtos;
import br.elmer.Service.SequenceGeneratorService;
import br.elmer.repository.ProdutosRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ProdutosController {
	
	@Autowired
	private ProdutosRepository produtosRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;

	@GetMapping("/produtos")
	public List<Produtos> getAllProdutos() {
		return produtosRepository.findAll();
	}

	@GetMapping("/produtos/{id}")
	public ResponseEntity<Produtos> getProdutosById(@PathVariable(value = "id") Long produtosId)
			throws ResourceNotFoundException {
		Produtos produtos = produtosRepository.findById(produtosId)
				.orElseThrow(() -> new ResourceNotFoundException("Produtos com id nao existente::: " + produtosId));
		return ResponseEntity.ok().body(produtos);
	}

	@PostMapping("/produtos")
	public Produtos createProdutos(@Valid @RequestBody Produtos produtos) {
		produtos.setId(sequenceGeneratorService.generateSequence(Produtos.SEQUENCE_NAME));
		return produtosRepository.save(produtos);
	}

	@PutMapping("/produtos/{id}")
	public ResponseEntity<Produtos> updateProdutos(@PathVariable(value = "id") Long produtosId,
			@Valid @RequestBody Produtos produtosDetails) throws ResourceNotFoundException {
		Produtos produtos = produtosRepository.findById(produtosId)
				.orElseThrow(() -> new ResourceNotFoundException("Produtos com id nao existente::: " + produtosId));

		produtos.setCodigo(produtosDetails.getCodigo());
		produtos.setNome(produtosDetails.getNome());
		produtos.setPreco(produtosDetails.getPreco());
		final Produtos updateProdutos = produtosRepository.save(produtos);
		return ResponseEntity.ok(updateProdutos);
	}

	@DeleteMapping("/produtos/{id}")
	public Map<String, Boolean> deleteProdutos(@PathVariable(value = "id") Long produtosId)
			throws ResourceNotFoundException {
		Produtos produtos = produtosRepository.findById(produtosId)
				.orElseThrow(() -> new ResourceNotFoundException("Produtos com id nao existente::: " + produtosId));

		produtosRepository.delete(produtos);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
