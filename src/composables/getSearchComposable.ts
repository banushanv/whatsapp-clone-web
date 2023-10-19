import { ref, watchEffect } from 'vue';

// by convention, composable function names start with "use"
export function useSearch(array: any, query: any) {
    // state encapsulated and managed by the composable
    const filteredArray = ref([]);
    const searchQuery = ref(query);

    // a composable can update its managed state over time
    watchEffect(() => {
            // filter the array based on the search query
            filteredArray.value = array.filter((item: any) => {
            // you can customize the logic for matching items here
                return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
       });
    });

    // expose managed state as return value
    return { filteredArray, searchQuery };
}