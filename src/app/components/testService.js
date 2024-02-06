'use server'
export async function testService (prevState, formdata) {
  console.log(formdata, 'this is the form Data')
  return { message: 'correct response' }
  // fetch de la data hacia el backend
}