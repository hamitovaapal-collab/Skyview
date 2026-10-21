export const u=id=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;
// Замените URL при необходимости — у всех изображений есть fallback.
export const VIDEO_URL='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
export const rooms=[
{id:'deluxe',guests:2,beds:1,price:120,type:'room',img:u('photo-1611892440504-42a792e24d32')},
{id:'ocean',guests:3,beds:1,price:180,type:'suite',img:u('photo-1582719478250-c89cae4dc85b')},
{id:'villa',guests:4,beds:2,price:320,type:'villa',img:u('photo-1520250497591-112f2f40a3f4')},
{id:'family',guests:5,beds:2,price:250,type:'suite',img:u('photo-1618773928121-c32242e63f39')}];
export const experiences=[
{id:'spa',img:u('photo-1540555700478-4be289fbecef')},{id:'food',img:u('photo-1414235077428-338989a2e8c0')},
{id:'tours',img:u('photo-1551632811-561732d1e306')},{id:'culture',img:u('photo-1537996194471-e657df975ab4')}];
export const HERO=u('photo-1540541338287-41700207dee6').replace('w=900','w=1800');
