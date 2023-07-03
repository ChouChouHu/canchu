# 使用 Node.js 的 LTS 版本為基底映像檔
FROM node:lts-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝專案依賴
RUN npm install

# 複製其他來源碼
COPY . .

# 開放 3000 號端口
EXPOSE 3000

# 開始運行
CMD ["npm", "run", "dev"]
