const Chat = require("../../Dtos/chatDto.js");
const ChatDaoFactory = require("../../Daos/daoChat.js");

class ChatRepo {
    constructor() {
        this.chatDao = ChatDaoFactory.createChatDao(PERSISTENCE)
    }
    async getAll() {
        try {
            const dtos = await this.chatDao.obtenerTodos();
            const chats = dtos.map((dto) => new Chat(dto));
            return chats;
        } catch (error) {
            throw new Error("Error repositorio chat=>", error);
        }
    }
    async add(chat) {
        try {
            const dto = Chat.toDTO(chat);
            await this.chatDao.agregarItem(dto);
        } catch (error) {
            throw new Error("Error repositorio chat=>", error);
        }
    }
}

module.exports = ChatRepo;