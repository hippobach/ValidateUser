import './AddUser.module.scss';

const AddUser = () => {
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"></input>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age"></input>
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
