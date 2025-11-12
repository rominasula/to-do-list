export default function reducer(state, action) {
    switch (action.type) {
        case "MODIFY":
            // Modify existing todo item
            return state.map(s => {
                if (s.id === action.id) {
                    s.title = action.title;
                }
                return s;
            });
        case "ADD":
            // Add new todo item
            return [action.item, ...state];
        case "DELETE":
            // Delete existing todo item
            return state.filter(s => s.id !== action.id);
        case "TOGGLE":
            // Toggle complete variable
            return state.map(s => {
                if (s.id === action.id) {
                    s.completed = !s.completed;
                }
                return s;
            });
        default:
            return state;
    }
}