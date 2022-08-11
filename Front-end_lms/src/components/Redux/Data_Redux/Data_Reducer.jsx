import { NIKE_DATA } from "./Data_Action"


const initstate={n_data:[]}

export const Data_Reducer=(store=initstate,{type,payload})=>{
        switch(type){
            case NIKE_DATA :{
                return{...store,n_data:payload}
            }
            default :{
                return store;
            }
        }
}



