# Ecosystem Services

## What are Ecosystem Services

- Set of commonly required and reusable services
- Implemented once, reused across many applications
- Provide common building blocks to significantly speed up development of new products and features
- Some services will provide framework features such as logging,authentication/authorization, etc.
- Applications provide their features as services for reuse across other
 applications or use cases

[Read wiki](https://teraworks.teradata.com/display/UDAAPPS/Ecosystem+Core+Services+Home+Page)

### List of Service

- [Audit Service](https://teraworks.teradata.com/display/UDAAPPS/Audit+Service)
- [Logging Service](https://teraworks.teradata.com/display/UDAAPPS/Logging+Service)
- [Notification Service](https://teraworks.teradata.com/display/UDAAPPS/Notification+Service)
- [Query Service](https://teraworks.teradata.com/display/UDAAPPS/Query+Service)
- [Vault Security Service](https://teraworks.teradata.com/display/UDAAPPS/Vault+Security+Service)
- [System Service](https://teraworks.teradata.com/display/UDAAPPS/System+Service)
- [User Service](https://teraworks.teradata.com/display/UDAAPPS/User+Service)
- [Database Dictionary Service](https://teraworks.teradata.com/display/UDAAPPS/Database+Dictionary+Service)

## Coming Soon SSO

## Why Ecosystem Services

Current products not well suited for Cloud/Hybrid models. They are silo-ed,
interdependent, and difficult to scale.

Cloud customers need:

- Ease of use, self service, consistency
- Speed – regular, iterative delivery of new functionality & fixes
- Scale – add resources as needed

### Microservices architecture provides

- Reuse with foundational shared services and components
- Remove hard dependencies
- Reduce time to market in delivering new features and fixes

## Service Characteristics

Focused on a single domain or “bounded context”

- Loosely coupled to other services
- Service functionality exposed via RESTful HTTP API calls
- Centralized logging for all services
- Service health and operational metrics exposed for each instance
- No cross-service direct data access (all cross-service requests are via public web APIs)
- Authentication via JWT (JSON Web tokens)

### Development Process

- Services are small, can be delivered in 1-3 months by a team of 5 engineers
- Agile development, quick feature reprioritization as needed
- Internal "Open-source" model
- Anyone can submit a pull request to add or modify features
- Set of core committers that review and approve all changes
- Automated feature tests required part of each pull request

### Development Guidelines

- [Service Profile](https://teraworks.teradata.com/display/UDAAPPS/Microservice+Profile): Wiki document to provide detailed design and implementation guidance
- Service Template: New lightweight service template based on
- Spark Java
- GitHub Enterprise (github.td.teradata.com) for version control
- Service features exposed via REST APIs
- Service APIs can be consumed by any UI technology stack
- [REST API Standards](https://github.td.teradata.com/arb/standards/blob/master/apis/REST.md)