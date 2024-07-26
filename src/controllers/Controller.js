// src/controllers/Controller.js
class Controller {
  constructor(service) {
    this.service = service
  }

  create = async (req, res) => {
    try {
      const data = await this.service.create(req.body)
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Erro no Servidor, tente novamente' })
    }
  }

  findMany = async (req, res) => {
    try {
      const data = await this.service.findMany(req.query)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Erro no Servidor, tente novamente' })
    }
  }

  findOne = async (req, res) => {
    try {
      const data = await this.service.findOne({
        where: { id: Number(req.params.id) },
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Erro no Servidor, tente novamente' })
    }
  }

  update = async (req, res) => {
    try {
      const data = await this.service.update(Number(req.params.id), req.body)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Erro no Servidor, tente novamente' })
    }
  }

  delete = async (req, res) => {
    try {
      await this.service.delete(Number(req.params.id))
      res.status(204).send()
    } catch (error) {
      res.status(500).json({ message: 'Erro no Servidor, tente novamente' })
    }
  }
}

export default Controller
