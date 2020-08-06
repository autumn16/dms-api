# Dormitory Management System API
### Giới thiệu API 
API được viết bằng NodeJS, Database được sử dụng là Firebase\
API được deploy lên heroku tại địa chỉ http://admin-database.herokuapp.com/
### Hướng dẫn sử dụng API 
1. Các route đều có 2 phương thức chung là GET và POST, ngoại trừ student có thêm 1 phương thức PUT
2. **Đối với route duty của admin** 
- GET tại đường dẫn http://admin-database.herokuapp.com/duty/getAll
- POST tại đường dẫn http://admin-database.herokuapp.com/duty/addNewDuty
3. **Đối với route health của admin** 
- GET tại đường dẫn http://admin-database.herokuapp.com/health/getAll
- POST tại đường dẫn http://admin-database.herokuapp.com/health/addNewHealth/user/id
4. **Đối với route security của admin** 
- GET tại đường dẫn http://admin-database.herokuapp.com/security/getAll
- POST tại đường dẫn http://admin-database.herokuapp.com/security/addNewSecurity/user/id
5. **Đối với route sanitation của admin** 
- GET tại đường dẫn http://admin-database.herokuapp.com/sanitation/getAll
- POST tại đường dẫn http://admin-database.herokuapp.com/sanitation/addNewSanitation/user/id
6. **Đối với route visitor record của admin** 
- GET tại đường dẫn http://admin-database.herokuapp.com/visitor-record/getAll
- POST tại đường dẫn http://admin-database.herokuapp.com/visitor-record/addNewVisitorRecord
7. **Đối với route student dùng để lưu trữ dữ liệu cá nhân của sinh viên**
- GET tại đường dẫn http://admin-database.herokuapp.com/student/getAll
- POST tại đường dẫn http://admin-database.herokuapp.com/student/addNewStudent
- PUT tại đường dẫn
### Lưu ý
1. Nếu chạy trên localhost thì server sẽ chạy trên port 3000
