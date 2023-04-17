import { reactive } from 'Vue';

export const store = reactive({
  loadOperactionEnded: false,
  baseUrl: '',
  cardsList: []
});