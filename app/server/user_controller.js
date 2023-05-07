const fs = require("fs");

// ユーザー情報のファイル名
const users_json = "./data/users.json";

// ユーザー情報のファイルが存在しない場合は作成する
if (!fs.existsSync(users_json)) {
  fs.writeFileSync(users_json, JSON.stringify({ lastId: 0, users: [] }));
}

/** ユーザ情報の読み込み
 *
 * @param {*} callback
 */
function loadUsers(callback) {
  fs.readFile(users_json, "utf8", (err, data) => {
    if (err) {
      callback([]);
    } else {
      try {
        const users = JSON.parse(data).users;
        callback(users);
      } catch (e) {
        callback([]);
      }
    }
  });
}

/** ユーザー一覧の取得
 curl http://localhost:3000/users
 */
function getUsers(callback) {
  fs.readFile(users_json, "utf8", (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data).users;
    callback(users);
  });
}

/** ユーザーの追加
 curl -X POST -H \
 "Content-Type: application/json" \
 -d '{"name": "Tom", "email": "tom@example.com"}' http://localhost:3000/users
*/
function addUser(user, callback) {
  loadUsers((users) => {
    const lastId = JSON.parse(fs.readFileSync(users_json, "utf8")).lastId;
    const newUser = { id: lastId + 1, name: user.name, email: user.email };
    users.push(newUser);
    const newData = { lastId: lastId + 1, users };
    fs.writeFile(users_json, JSON.stringify(newData), (err) => {
      if (err) {
        callback(null);
      } else {
        callback(newUser);
      }
    });
  });
}

/** ユーザーの更新
 curl -X PUT -H \
  "Content-Type: application/json" \
  -d '{"name": "Tom", "email": "rep@example.com"}' http://localhost:3000/users/2
*/
function updateUser(id, user, callback) {
  loadUsers((users) => {
    const index = users.findIndex((u) => u.id === Number(id));
    if (index >= 0) {
      const updatedUser = { id: Number(id), ...user };
      users[index] = updatedUser;
      const newData = { lastId: users.lastId, users };
      fs.writeFile(users_json, JSON.stringify(newData), (err) => {
        if (err) {
          callback(null);
        } else {
          callback(updatedUser);
        }
      });
    } else {
      callback(null);
    }
  });
}

/** ユーザーの削除
  curl -X DELETE http://localhost:3000/users/1
*/
function deleteUser(id, callback) {
  loadUsers((users) => {
    const index = users.findIndex((u) => u.id === Number(id));
    if (index >= 0) {
      const deletedUser = users.splice(index, 1)[0];
      const newData = { lastId: users.lastId, users };
      fs.writeFile(users_json, JSON.stringify(newData), (err) => {
        if (err) {
          callback(null);
        } else {
          callback(deletedUser);
        }
      });
    } else {
      callback(null);
    }
  });
}

module.exports = {
  loadUsers,
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
