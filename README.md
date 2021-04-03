**_WIP_**
# Folders Details

- ## plugin
  These file are intended to be copied to the project (Just once), and are used by the app (support, templates and others if needed)
  - @TODO -> Make this part of the add endpoint process (CLI)

- ## support
  These files are usually extended by the templates, and are the base share logic for this _**Extension**_ component, it include

  - `accessPoint.js`: Base logic for **route** managedment, it include by default:
    - `rejects` method, base on the non compliance with the `allowedVerbs` attribute.
      - `Post BusinessLogic`
    
    It aslo include the posibility of override the route declaration with     `routesOverride`

  - `businessLogic.js`: Common logic / process for this endpoint, it include by default:
    - `[get|post|put|delete]InputSchemeValidator(data)`: Intended method for scheme validation (Input data), it will return `true` by default unlest is overrided. If `false` it will shortcircuit the process.
      - `Pre Endpoint Process`
    
    - `[get|post|put|delete]OutputSchemeValidator(data)`: Intended method for scheme validation (Output data), it will return `true` by default unlest is overrided. If `false` it will shortcircuit the process.
      - `Post Endpoint Process`
    
    - `[get|post|put|delete]InputOverride(data)`: Intended method for data modification / override (Input data), it also set that information to `this.request.dome.input`, from where can be used for other methods
      - `Pre Endpoint Process`
    
    - `[get|post|put|delete]OutputOverride(data)`: Intended method for data modification / override (Output data), it also set that information to `this.response.dome.output`, from where can be used for other methods
      - `Post Endpoint Process`
    
    - `[get|post|put|delete]Process()`: Actual process / logic for this endpoint, by default it just `return { data : "get" };`, this should be overrided with the intended behaviour.

    - `[get|post|put|delete]()`: **Do not override**, this is the orchestrator of the others / prev methods.

- ## templates
  These file are copied each time you decide to add a new endpoint, it has the need extensions to use the support files.
  
  - `accessPoint.js`: Route managedment, it `extends` from `support/accessPoint`

  - `businessLogic.js`: Process execution for the specific endpoint, here can be override most of the default method of `support/businessLogic.js` (but no `[get|post|put|delete]()`), is also the right place to define other kind of logic related to the endpoint logic