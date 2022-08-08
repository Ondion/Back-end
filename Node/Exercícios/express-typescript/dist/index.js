"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
api.use(express_1.default.json());
const PORT = process.env.PORT || 3001;
api.get('/', (request, response, next) => {
    response.status(200).json({ message: 'API up!' });
});
api.listen(PORT, () => {
    console.log(`ouvindo na porta ${PORT}`);
});
