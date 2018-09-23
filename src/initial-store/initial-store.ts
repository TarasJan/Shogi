import Charsets from '../helpers/charsets/charsets';



const InitialStore = {
  answers: [] as any,
  charset: Charsets.katakana as any,
  question: '' as any,
  scoreInfo: { limit: 5, score: 0 } as any,
};


export default InitialStore;
