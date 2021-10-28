FROM openjdk:11-jdk

WORKDIR /app

ENTRYPOINT ["./gradlew", "build",  "--stacktrace"]
ENTRYPOINT ["java", "-jar", "build/libs/lineage-0.0.1-SNAPSHOT.jar"]