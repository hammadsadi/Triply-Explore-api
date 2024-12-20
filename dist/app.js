"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
const port = 3000;
// Parser
app.use(express_1.default.json());
app.use(express_1.default.text());
app.get("/", (req, res) => {
    res.send("Hello World..!");
});
// Global Middleware
app.use(notFound_1.default);
exports.default = app;
