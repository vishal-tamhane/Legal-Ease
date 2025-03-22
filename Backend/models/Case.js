const caseSchema = new mongoose.Schema({
    litigantName: { type: String, required: true },
    address: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    courtType: { type: String, required: true },
    caseType: { type: String, required: true },
    reliefSought: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    causeOfAction: { type: String, required: true },
    dateOfAction: { type: Date, required: true },
    subject: { type: String, required: true },
    valuation: { type: String, required: true },
    actDetails: { type: String, required: true },
    sectionDetails: { type: String, required: true },
    filedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the lawyer
    createdAt: { type: Date, default: Date.now },
  });
  
  const Case = mongoose.model("Case", caseSchema);