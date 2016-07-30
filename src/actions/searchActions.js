export default function doSearch(query) {
  return {
    type: "RESULTS_RECEIVED",
    payload: query
  };
}
