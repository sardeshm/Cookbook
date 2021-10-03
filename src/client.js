import * as contentful from 'contentful'

export const client = contentful.createClient({
  space:'k3psjkx4sg00',
  accessToken: 'NjcmtUr18qMCXwzTreqo_3Skauw6ntuCS7qjE3gjCrU'
  
  
    // space:'process.env.REACT_APP_ID',
    // acessToken: 'process.env.REACT_APP_TOKEN'
})