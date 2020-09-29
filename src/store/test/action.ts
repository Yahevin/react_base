import InferValueTypes from "@/types/InferValueTypes";


const Action = {
    set: function(test: number) {
        return {
            type: '',
            payload: test,
        }
    },
};

type ActionTypes = ReturnType<InferValueTypes<typeof Action>>;


export {Action, ActionTypes};

