const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  caseNumber: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'closed', 'archived'],
    default: 'pending'
  },
  type: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  court: {
    name: String,
    jurisdiction: String,
    judge: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  parties: {
    plaintiffs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    defendants: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    lawyers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  hearings: [{
    date: Date,
    type: String,
    notes: String,
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'postponed', 'cancelled'],
      default: 'scheduled'
    }
  }],
  documents: [{
    title: String,
    fileUrl: String,
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  timeline: [{
    date: {
      type: Date,
      default: Date.now
    },
    action: String,
    description: String,
    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
}, {
  timestamps: true
});

// Add text index for search functionality
caseSchema.index({ 
  title: 'text', 
  description: 'text', 
  caseNumber: 'text' 
});

module.exports = mongoose.model('Case', caseSchema); 