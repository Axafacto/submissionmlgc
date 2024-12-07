const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('submissionmlgc-aldyazzam-01-firebase-adminsdk-5ejuo-4804745b4e.json')
     
async function storeData(id, data) {

  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-aldyazzam-01',
      keyFilename: pathKey,
    });
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}
 
module.exports = storeData;