// src/services/Service.js
class Service {
  constructor(model) {
    this.model = model
  }

  async create(data) {
    return await this.model.create({ data })
  }

  async findMany(query) {
    return await this.model.findMany(query)
  }

  async findOne(query) {
    return await this.model.findUnique(query)
  }

  async update(id, data) {
    return await this.model.update({
      where: { id },
      data,
    })
  }

  async delete(id) {
    return await this.model.delete({
      where: { id },
    })
  }
}

export default Service
