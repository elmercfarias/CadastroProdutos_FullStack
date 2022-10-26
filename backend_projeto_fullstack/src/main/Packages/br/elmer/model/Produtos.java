package br.elmer.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.index.indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "Produtos")

public class Produtos {

	@Transient
	public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	private long id;

	@codigo
	private long codigo;

	@NotNull
	@Size (max=100)
	@Indexed (unique=true)
	private String nome;

	@preco
	private Float preco;


	public Produtos() {

	}

	public Produtos(long id, long codigo, String nome, Float preco) {
		   this.id = id;
		   this.codigo = codigo;
	       this.nome = nome;
	       this.preco = preco;
	}	

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Float getPreco() {
		return preco;
	}

	public void setPreco(Float preco) {
		this.preco = preco;
	}


	@Override
	public String toString() {
		return "Produtosv2 [v2id=" + id + ", codigo=" + codigo + ", nome=" + nome + ", preco=" + preco
				+ "]";
	}
	
}
