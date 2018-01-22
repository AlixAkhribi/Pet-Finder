import axios from 'axios';



export default {
  getRandomPet() {
    return axios.get('/api/pets/getPet')
      .then((res) => {
        const result = res.data[Math.floor(Math.random() * 7) + 1];
        // console.log(result);
        return result;
      });
  },
};
