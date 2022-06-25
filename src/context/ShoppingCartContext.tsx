import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingProps = {
  children: ReactNode;
};

type CartItems={
    id:number
    quantity:number
}

type shoppingCartContext={
    gt:(id:number)=>number
    inc:(id:number)=>void
    dec:(id:number)=>void
    rm:(id:number)=>void
}

const ShoppingCartContext = createContext({} as shoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingProps) {
    const [state,setState]=useState<CartItems[]>([])


  function gt(id:number){
    return state.find(item=>item.id===id)?.quantity || 0
  }
  function inc(id:number){
    setState((prev)=>{
        if(prev.find(item=>item.id===id)==null){
            return [...prev,{id,quantity:1}]
        }else{
            return prev.map(pr=>pr.id===id?{...pr,quantity:pr.quantity+1}:pr)
        }
    })
  }
  function dec(id:number){
    setState((prev)=>{
        if(prev.find(item=>item.id===id)?.quantity===1){
            return prev.filter(pr=>pr.id!==id)
        }else{
            return prev.map(pr=>pr.id===id?{...pr,quantity:pr.quantity-1}:pr)
        }
    })
  }
  function rm(id:number){
    setState((prev)=>{
        return prev.filter(pr=>pr.id!==id)  
    })
  }


  return (
    <ShoppingCartContext.Provider value={{
        gt,
        inc,
        dec,
        rm,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
