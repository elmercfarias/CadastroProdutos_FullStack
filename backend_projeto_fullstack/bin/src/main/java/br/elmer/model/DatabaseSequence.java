package br.elmer.model;

import org.springframework.data.annotation.id;

import javax.persistence.Id;

import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document (collection = "database_sequences")

public class DatabaseSequence {
	
	@Id
	private String id;
	
	private long seq;
	
	public DatabaseSequence() {
	

}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public long getSeq() {
		return seq;
	}

	public void setSeq(long seq) {
		this.seq = seq;
	}
	
}
