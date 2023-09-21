import {request} from "./requester";

const baseUrl = 'http://localhost:3030';

export const getAll = async () => {
   try{

   const games = await request('GET', `${baseUrl}/data/games?sortBy=_createdOn%20desc`);

   return games;
   }catch(err) {
      console.log(err)
   }
}