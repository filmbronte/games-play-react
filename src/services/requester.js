export const request = async (method, url) => {
    try{

    const response = await fetch(url, {
        method,
    });

   const result = await response.json();

   return result;
    }catch(err) {
        return {};
    }
}