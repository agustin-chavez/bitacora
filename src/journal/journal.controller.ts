import express from "express";
import JournalService from "./journal.service";

class JournalController {
  constructor(private service: JournalService) {}

  list = async (request: express.Request, response: express.Response) => {
    const filters = request.query;
    console.log(`🔎 Getting journals list. Filters: ${filters}`);
    const journals = this.service.list(filters);
  };
}

export default JournalController;
