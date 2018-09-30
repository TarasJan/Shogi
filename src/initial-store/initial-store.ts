import Charsets from '../helpers/charsets/charsets';

const InitialStore = {
  answers: [] as any,
  charset: Charsets.katakana as any,
  question: '' as any,
  scoreInfo: { limit: 5, score: 0 } as any,
  user: {
    avatarId: 'derek',
    charsets: ['hiragana'],
    exp: 726,
    level: 6,
    name: 'Derek',
    status: 'Learing Japanese for fun since 2001'
  }
};

export default InitialStore;
