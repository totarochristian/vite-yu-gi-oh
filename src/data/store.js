import { reactive } from 'vue';

export const store = reactive({
  loadOperationsEnded: false,
  baseUrl: 'https://db.ygoprodeck.com/api/v7/',
  endpointCards:'cardinfo.php',
  endpointArchetypes: 'archetypes.php',
  selectedArchetype: 'Alien',
  cardsList: [],
  archetypesList: []
});