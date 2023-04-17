import { reactive } from 'Vue';

export const store = reactive({
  loadOperationsEnded: false,
  baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  cardsList: []
});