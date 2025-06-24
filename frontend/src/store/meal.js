import { create } from "zustand";

export const useMealTable = create((set) => ({
    meals: [],
    setMeals:(meals) => set({meals}),
    createMeal: async(newMeal) => {
        if(!newMeal.name) {
            return{success:false, message: "Please fill all fields."}
        }
        const res = await fetch("/api/meals",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newMeal)
        })
        const data = await res.json();
        set((state) => ({meals:[...state.meals, data.data]}))
        return{success:true, message: "Meal created successfully."}
    },
    fetchMeals: async() => {
        const res = await fetch("/api/meals", {
            method: "GET",
        })
        const data = await res.json();
        set({meals: data.data});
    },
    deleteMeal: async(id)=> {
        const res = await fetch(`/api/meals/${id}`,{
            method:"DELETE",
        })
        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};
        set((state) => ({meals: state.meals.filter(meal => meal._id !== id)}));
        return{success: true, message: "Meal deleted successfully."};
    },


}))