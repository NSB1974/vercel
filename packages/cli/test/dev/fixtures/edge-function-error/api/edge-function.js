export const config = {
  runtime: 'experimental-edge',
};

export default async function edge(request, event) {
  throw new Error('intentional error from inside an edge function');
}
