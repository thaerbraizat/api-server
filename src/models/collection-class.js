'use strict';

class Collection {
    
    constructor(model) {
        this.model = model;
    }

    async create(obj) {
        
        try {
            return await this.model.create(obj);
        } catch(e) {
            console.error('error creating the new record for model: ', this.model.name)
        }
    }

    async read(id) {
        try{
            let records = null;
            if (id) {
                records = await this.model.findOne({where: {id: id }});
            } else {
                records = await this.model.findAll();
            }
            return records;
        } catch(e) {
            console.error('error read the record(s) for model: ', this.model.name, `id: ${id}`)
        }

    }

    async update(id, obj) {
        try{
            let recordById = await this.model.findOne({where: {id:id}});
            let updated = await recordById.update(obj);
            return updated;
        } catch(e) {
            console.error('error updating the record for model: ', this.model.name, `id: ${id}`)
        }
      
    }

    async delete(id) {

        if (!id) throw new Error(' No ID is provided !!! for model: ', this.model.name);

        try {
            let deleted = await this.model.destroy({where: {id}});
            return deleted; 
        } catch(e) {
            console.error('error deleting the record for model: ', this.model.name, `id: ${id}`)
        }
    }
}

module.exports = Collection;