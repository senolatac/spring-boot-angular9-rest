# User Management System, Spring Boot, Angular 9, MySQL, Hibernate

The application structure is as follows.
- **server-side** - Service implemented using Spring boot. [More info](spring-boot-rest/README.md)
- **client-side** - A NodeJs application implemented using Angular 9. This consumes services hosted by server side.  [More info](angular-rest/README.md)

#### 1) Build Server Side

```
$ cd spring-boot-rest
$ gradlew bootJar
$ gradlew bootRun
```

#### 2) Build and run client side

```
$ cd angular-rest
$ ng serve -o
```

### Access server side using following URL

```
http://localhost:8080
```

### Access application using following URL

```
http://localhost:4200
```