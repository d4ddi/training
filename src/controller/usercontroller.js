let users = [
    { id: 1, name: "Elyse", email: "drellichief@gmail.com" },
    { id: 2, name: "Mugarura", email: "mugarurandayisaba00@gmail.com" }
];
export function getUsers(req, res) {
    res.json({ users });
}
