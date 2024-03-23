import journalSchema from './journal.model';

class JournalService {
  list = (filters: any) => {
    return journalSchema.find(filters);
  };
}

export default JournalService;
