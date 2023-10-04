/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package money.manager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import money.manager.config.WebserverConfiguration;

@SpringBootApplication
public class App {

    private static final Logger LOG = LoggerFactory.getLogger(App.class);

    public static void main(String[] args) {
        LOG.info("Starting money.manager...");

        SpringApplication.run(WebserverConfiguration.class, args);

        LOG.info("Ending of starting money.manager...");

    }
}
