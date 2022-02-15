import { writable } from 'svelte/store';

export const count = writable(0);
export const isFetching = writable(false);

export function getNewCount() {
	isFetching.set(true);
// 	return new Promise((res) =>
// 		setTimeout(() => {
// 			res(count.set(Math.random()));
// 			isFetching.set(false);
// 		}, 1000)
// 	); 
let promise;
const getData = () => {
	promise = fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((x) => x.json());
	}
 getData()
 promise.then((res)=>{
	 count.set(Object.keys(res).length);
	 isFetching.set(false);
 })
}