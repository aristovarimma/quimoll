interface Record {
  id: number;
  timestamp: Date;
  data: string;
}

class RecordKeeper {
  private records: Record[] = [];

  public addRecord(data: string): void {
    const newRecord: Record = {
      id: this.generateUniqueId(),
      timestamp: new Date(),
      data: data
    };
    this.records.push(newRecord);
  }

  private generateUniqueId(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  public getRecords(): Record[] {
    return this.records;
  }
}

// Usage
const myRecordKeeper = new RecordKeeper();
myRecordKeeper.addRecord('Sample data');
console.log(myRecordKeeper.getRecords());
