package br.elmer.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import br.elmer.model.Produtos;

@Repository
public interface ProdutosRepository extends MongoRepository<Produtos, Long>{

}
