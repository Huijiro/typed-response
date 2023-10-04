interface typedResponseOK<T> extends Response {
  ok: true;
  json(): Promise<T>;
}

interface typedResponseError<T> extends Response {
  ok: false;
  json(): Promise<T>;
}

type typedResponse<T, E> = typedResponseOK<T> | typedResponseError<E>;

/**
 * Typed fetch that wraps the default fetch function to give you a typed response based on the TResponse and TError types.
 * 
 * @template TResponse Is the form of the response if the request is successful
 * @template TError Is the form of the response if the request is not successful
 * @param input Is the URL or Request object you want to fetch
 * @param init Is the options object you want to pass to the fetch function
 * @returns Either a TResponse or a TError.
*/
async function typedFetch<TResponse, TError>(
  input: RequestInfo,
  init?: RequestInit
): Promise<typedResponse<TResponse, TError>> {
  return await fetch(input, init);
}
