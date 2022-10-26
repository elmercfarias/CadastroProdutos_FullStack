package br.elmer.Service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import br.elmer.model.DatabaseSequence;

@Service
public class SequenceGeneratorService {

	   private MongoOperations mongoOperations;

	   @Autowired
	   public SequenceGeneratorService (mongoOperations mongoOperations) {
	      this.mongoOperations = mongoOperations; 
	   }

	   public long generateSequence (String seqName) {
	        DatabaseSequence counter = mongoOperations.findAndModify (query(where("_id").is,
	                new Update().inc("seq",1), options().returnNew(true).upsert(true),
	                DatabaseSequence.class);
	        return !Objects.isNull (counter) ? counter.getSeq() : 1;	        																																																																																																																																																																															
        }
}