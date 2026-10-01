import net from "node:net";

const HOST = "127.0.0.1";
const PORT = 8080;

const server = net.createServer((socket) => {
    console.log("Client terhubung!");

    socket.on("data", (data) => {
        const pesan = data.toString();

        console.log("Pesan dari client:", pesan);

        socket.write(`Server menerima: ${pesan}`);
    });

    socket.on("end", () => {
        console.log("Client memutuskan koneksi.");
    });

    socket.on("error", (error) => {
        console.error("Terjadi error:", error.message);
    });
});

server.listen(PORT, HOST, () => {
    console.log(`TCP Server berjalan di ${HOST}:${PORT}`);
});
