var spec = {
  "openapi" : "3.0.2",
  "info" : {
    "title" : "LibrisCool shopping draft",
    "description" : "Zero draft shoppers API\n",
    "contact" : {
      "email" : "apiteam@libris.cool"
    },
    "version" : "0.0.0"
  },
  "servers" : [ {
    "url" : "https://dev.libris.cool/api/v0"
  } ],
  "tags" : [ {
    "name" : "Books",
    "description" : "Books catalog"
  }, {
    "name" : "Orders",
    "description" : "Orders handling"
  }, {
    "name" : "Echo",
    "description" : "Example echo operations"
  } ],
  "paths" : {
    "/books" : {
      "get" : {
        "tags" : [ "Books" ],
        "summary" : "Get books list",
        "description" : "Available books list.",
        "operationId" : "getBooksList",
        "parameters" : [ {
          "name" : "offset",
          "in" : "query",
          "description" : "Result set offset",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "integer"
          }
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Number of items per page (max 100)",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "integer"
          }
        }, {
          "name" : "title",
          "in" : "query",
          "description" : "Filter by author title",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "string"
          }
        }, {
          "name" : "author",
          "in" : "query",
          "description" : "Filter by author",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "string"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/inline_response_200"
                }
              }
            }
          },
          "401" : {
            "description" : "Unauthorized",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/inline_response_401"
                }
              }
            }
          }
        },
        "security" : [ {
          "main_auth" : [ "read:books" ]
        }, {
          "api_key" : [ ]
        } ]
      }
    },
    "/books/{id}" : {
      "get" : {
        "tags" : [ "Books" ],
        "summary" : "Find book by ID",
        "description" : "Returns a single book",
        "operationId" : "getBookById",
        "parameters" : [ {
          "name" : "id",
          "in" : "path",
          "description" : "ID of book to return",
          "required" : true,
          "style" : "simple",
          "explode" : false,
          "schema" : {
            "type" : "integer",
            "format" : "int64"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/inline_response_200_1"
                }
              }
            }
          },
          "401" : {
            "description" : "Unauthorized",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/inline_response_401"
                }
              }
            }
          },
          "403" : {
            "description" : "Forbidden"
          },
          "404" : {
            "description" : "Book not found"
          }
        },
        "security" : [ {
          "main_auth" : [ "read:books" ]
        }, {
          "api_key" : [ ]
        } ]
      }
    },
    "/orders" : {
      "get" : {
        "tags" : [ "Orders" ],
        "summary" : "Get orders list",
        "description" : "User orders list.",
        "operationId" : "getOrdersList",
        "parameters" : [ {
          "name" : "status",
          "in" : "query",
          "description" : "Filter by order status",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "string"
          }
        }, {
          "name" : "offset",
          "in" : "query",
          "description" : "Result set offset",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "integer"
          }
        }, {
          "name" : "limit",
          "in" : "query",
          "description" : "Number of items per page (max 100)",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "integer"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "OK",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/inline_response_200_2"
                }
              }
            }
          },
          "401" : {
            "description" : "Unauthorized",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/inline_response_401"
                }
              }
            }
          }
        }
      },
      "post" : {
        "tags" : [ "Orders" ],
        "summary" : "Create a new order",
        "description" : "Creates a new order and optionally submits it for fulfillment",
        "operationId" : "createOrder",
        "parameters" : [ {
          "name" : "confirm",
          "in" : "query",
          "description" : "Automatically submit the newly created order for fulfillment (skip the Draft phase)",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "boolean"
          }
        }, {
          "name" : "update_existing",
          "in" : "query",
          "description" : "Try to update existing order if an order with the specified external_id already exists",
          "required" : false,
          "style" : "form",
          "explode" : true,
          "schema" : {
            "type" : "boolean"
          }
        } ],
        "requestBody" : {
          "$ref" : "#/components/requestBodies/OrderInput"
        },
        "responses" : {
          "200" : {
            "description" : "OK",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/inline_response_200_3"
                }
              }
            }
          },
          "401" : {
            "description" : "Unauthorized",
            "content" : {
              "application/json" : {
                "schema" : {
                  "$ref" : "#/components/schemas/inline_response_401"
                }
              }
            }
          }
        },
        "security" : [ {
          "main_auth" : [ "write:orders" ]
        }, {
          "api_key" : [ ]
        } ]
      }
    },
    "/echo" : {
      "post" : {
        "tags" : [ "Echo" ],
        "summary" : "Echo test",
        "description" : "Receive the exact message you've sent",
        "operationId" : "echo",
        "requestBody" : {
          "description" : "Echo payload",
          "content" : {
            "application/json" : {
              "schema" : {
                "type" : "string",
                "example" : "Hello world!"
              }
            },
            "application/xml" : {
              "schema" : {
                "type" : "string",
                "example" : "Hello world!"
              }
            }
          },
          "required" : true
        },
        "responses" : {
          "200" : {
            "description" : "OK",
            "headers" : {
              "X-Rate-Limit" : {
                "description" : "calls per hour allowed by the user",
                "style" : "simple",
                "explode" : false,
                "schema" : {
                  "type" : "integer",
                  "format" : "int32"
                }
              },
              "X-Expires-After" : {
                "$ref" : "#/components/headers/ExpiresAfter"
              }
            },
            "content" : {
              "application/json" : {
                "schema" : {
                  "type" : "string"
                },
                "examples" : {
                  "response" : {
                    "value" : "Hello world!"
                  }
                }
              },
              "application/xml" : {
                "schema" : {
                  "type" : "string"
                }
              },
              "text/csv" : {
                "schema" : {
                  "type" : "string"
                }
              }
            }
          }
        },
        "security" : [ {
          "api_key" : [ ]
        }, {
          "basic_auth" : [ ]
        } ]
      }
    }
  },
  "components" : {
    "schemas" : {
      "Response200" : {
        "type" : "object",
        "properties" : {
          "code" : {
            "type" : "integer",
            "description" : "Response status code `200`",
            "example" : 200
          }
        }
      },
      "Response200Paginated" : {
        "type" : "object",
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response200"
        }, {
          "properties" : {
            "paging" : {
              "$ref" : "#/components/schemas/Paging"
            }
          }
        } ]
      },
      "Paging" : {
        "title" : "Paging",
        "type" : "object",
        "properties" : {
          "total" : {
            "type" : "integer",
            "description" : "Total number of items available",
            "example" : 100
          },
          "offset" : {
            "type" : "integer",
            "description" : "Current result set page offset",
            "example" : 10
          },
          "limit" : {
            "type" : "integer",
            "description" : "Max number of items per page",
            "example" : 100
          }
        },
        "description" : "Paging information"
      },
      "Book" : {
        "type" : "object",
        "properties" : {
          "id" : {
            "type" : "integer",
            "format" : "int64"
          },
          "title" : {
            "minLength" : 1,
            "type" : "string",
            "description" : "Book title"
          },
          "author" : {
            "minLength" : 2,
            "type" : "string",
            "description" : "Book author"
          }
        }
      },
      "Order" : {
        "title" : "Order",
        "type" : "object",
        "properties" : {
          "id" : {
            "type" : "integer",
            "description" : "Order ID",
            "readOnly" : true
          },
          "status" : {
            "minLength" : 5,
            "type" : "string",
            "description" : "Order status",
            "readOnly" : true,
            "example" : "fulfilled"
          },
          "created" : {
            "type" : "integer",
            "description" : "Time when the order was created",
            "readOnly" : true,
            "example" : 1602607640
          },
          "updated" : {
            "type" : "integer",
            "description" : "Time when the order was updated",
            "readOnly" : true,
            "example" : 1602607640
          },
          "shipping" : {
            "type" : "string",
            "description" : "Shipping method. Defaults to 'STANDARD'",
            "example" : "STANDARD"
          },
          "shipping_service_name" : {
            "type" : "string",
            "description" : "Human readable shipping method name.",
            "readOnly" : true,
            "example" : "Flat Rate (3-4 business days after fulfillment)"
          },
          "recipient" : {
            "$ref" : "#/components/schemas/Address"
          },
          "items" : {
            "type" : "array",
            "description" : "Array of items in the order",
            "items" : {
              "$ref" : "#/components/schemas/Item"
            }
          }
        },
        "description" : "Information about the Order"
      },
      "Item" : {
        "title" : "Item",
        "type" : "object",
        "properties" : {
          "id" : {
            "type" : "integer",
            "description" : "Line item ID",
            "example" : 1
          },
          "quantity" : {
            "type" : "integer",
            "description" : "Number of items ordered",
            "example" : 1
          },
          "price" : {
            "type" : "string",
            "description" : "LibrisCool price of the item",
            "example" : "13.00"
          },
          "retail_price" : {
            "type" : "string",
            "description" : "Original retail price of the item to be displayed on the packing slip",
            "example" : "13.00"
          },
          "name" : {
            "type" : "string",
            "description" : "Display name of the item. If not given, a name from the LibrisCool system will be displayed on the packing slip",
            "example" : "Enhanced Matte Paper Poster 18×24"
          }
        },
        "description" : "Information about an item in the order"
      },
      "Address" : {
        "title" : "Address",
        "type" : "object",
        "properties" : {
          "name" : {
            "type" : "string",
            "description" : "Full name",
            "example" : "John Smith"
          },
          "company" : {
            "type" : "string",
            "description" : "Company name",
            "example" : "John Smith Inc"
          },
          "address1" : {
            "type" : "string",
            "description" : "Address line 1",
            "example" : "19749 Dearborn St"
          },
          "address2" : {
            "type" : "string",
            "description" : "Address line 2"
          },
          "city" : {
            "type" : "string",
            "description" : "City",
            "example" : "Chatsworth"
          },
          "state_code" : {
            "type" : "string",
            "description" : "State code",
            "example" : "CA"
          },
          "state_name" : {
            "type" : "string",
            "description" : "State name",
            "example" : "California"
          },
          "country_code" : {
            "type" : "string",
            "description" : "Country code",
            "example" : "US"
          },
          "country_name" : {
            "type" : "string",
            "description" : "Country name",
            "example" : "United States"
          },
          "zip" : {
            "type" : "string",
            "description" : "ZIP/Postal code",
            "example" : "91311"
          },
          "phone" : {
            "type" : "string",
            "description" : "Phone number"
          },
          "email" : {
            "type" : "string",
            "description" : "Email address"
          },
          "tax_number" : {
            "type" : "string",
            "description" : "TAX number (`optional`, but in case of Brazil country this field becomes `required` and will be used as CPF/CNPJ number)<br> CPF format is 000.000.000-00 (14 characters);<br> CNPJ format is 00.000.000/0000-00 (18 characters).",
            "example" : "123.456.789-10"
          }
        },
        "description" : "Information about the address"
      },
      "inline_response_200" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response200Paginated"
        }, {
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Book"
              }
            }
          }
        } ]
      },
      "inline_response_401" : {
        "type" : "object",
        "properties" : {
          "code" : {
            "type" : "integer",
            "description" : "Response status code `401`",
            "example" : 401
          },
          "result" : {
            "type" : "string",
            "description" : "Actual error message",
            "example" : "Malformed Authorization header."
          },
          "error" : {
            "$ref" : "#/components/schemas/inline_response_401_error"
          }
        }
      },
      "inline_response_200_1" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response200"
        }, {
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Book"
              }
            }
          }
        } ]
      },
      "inline_response_200_2" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response200Paginated"
        }, {
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Order"
              }
            }
          }
        } ]
      },
      "inline_response_200_3" : {
        "allOf" : [ {
          "$ref" : "#/components/schemas/Response200"
        }, {
          "properties" : {
            "result" : {
              "type" : "array",
              "items" : {
                "$ref" : "#/components/schemas/Order"
              }
            }
          }
        } ]
      },
      "inline_response_401_error" : {
        "type" : "object",
        "properties" : {
          "reason" : {
            "type" : "string",
            "example" : "BadRequest"
          },
          "message" : {
            "type" : "string",
            "example" : "Malformed Authorization header."
          }
        }
      }
    },
    "responses" : {
      "Orders" : {
        "description" : "OK",
        "content" : {
          "application/json" : {
            "schema" : {
              "$ref" : "#/components/schemas/inline_response_200_2"
            }
          }
        }
      },
      "Order" : {
        "description" : "OK",
        "content" : {
          "application/json" : {
            "schema" : {
              "$ref" : "#/components/schemas/inline_response_200_3"
            }
          }
        }
      },
      "Books" : {
        "description" : "OK",
        "content" : {
          "application/json" : {
            "schema" : {
              "$ref" : "#/components/schemas/inline_response_200"
            }
          }
        }
      },
      "Book" : {
        "description" : "OK",
        "content" : {
          "application/json" : {
            "schema" : {
              "$ref" : "#/components/schemas/inline_response_200_1"
            }
          }
        }
      },
      "Unauthorized" : {
        "description" : "Unauthorized",
        "content" : {
          "application/json" : {
            "schema" : {
              "$ref" : "#/components/schemas/inline_response_401"
            }
          }
        }
      }
    },
    "parameters" : {
      "Offset" : {
        "name" : "offset",
        "in" : "query",
        "description" : "Result set offset",
        "required" : false,
        "style" : "form",
        "explode" : true,
        "schema" : {
          "type" : "integer"
        }
      },
      "Limit" : {
        "name" : "limit",
        "in" : "query",
        "description" : "Number of items per page (max 100)",
        "required" : false,
        "style" : "form",
        "explode" : true,
        "schema" : {
          "type" : "integer"
        }
      },
      "BookTitle" : {
        "name" : "title",
        "in" : "query",
        "description" : "Filter by author title",
        "required" : false,
        "style" : "form",
        "explode" : true,
        "schema" : {
          "type" : "string"
        }
      },
      "BookAuthor" : {
        "name" : "author",
        "in" : "query",
        "description" : "Filter by author",
        "required" : false,
        "style" : "form",
        "explode" : true,
        "schema" : {
          "type" : "string"
        }
      },
      "BookId" : {
        "name" : "id",
        "in" : "path",
        "description" : "ID of book to return",
        "required" : true,
        "style" : "simple",
        "explode" : false,
        "schema" : {
          "type" : "integer",
          "format" : "int64"
        }
      },
      "Status" : {
        "name" : "status",
        "in" : "query",
        "description" : "Filter by order status",
        "required" : false,
        "style" : "form",
        "explode" : true,
        "schema" : {
          "type" : "string"
        }
      },
      "Confirm" : {
        "name" : "confirm",
        "in" : "query",
        "description" : "Automatically submit the newly created order for fulfillment (skip the Draft phase)",
        "required" : false,
        "style" : "form",
        "explode" : true,
        "schema" : {
          "type" : "boolean"
        }
      },
      "UpdateExisting" : {
        "name" : "update_existing",
        "in" : "query",
        "description" : "Try to update existing order if an order with the specified external_id already exists",
        "required" : false,
        "style" : "form",
        "explode" : true,
        "schema" : {
          "type" : "boolean"
        }
      }
    },
    "requestBodies" : {
      "OrderInput" : {
        "description" : "POST request body",
        "content" : {
          "application/json" : {
            "schema" : {
              "$ref" : "#/components/schemas/Order"
            }
          }
        },
        "required" : true
      }
    },
    "headers" : {
      "ExpiresAfter" : {
        "description" : "date in UTC when token expires",
        "style" : "simple",
        "explode" : false,
        "schema" : {
          "type" : "string",
          "format" : "date-time"
        }
      }
    },
    "securitySchemes" : {
      "main_auth" : {
        "type" : "oauth2",
        "flows" : {
          "implicit" : {
            "authorizationUrl" : "https://dev.libris.cool/api/oauth/dialog",
            "scopes" : {
              "read:books" : "read books info",
              "read:orders" : "read orders info",
              "write:orders" : "modify or add orders"
            }
          }
        }
      },
      "api_key" : {
        "type" : "apiKey",
        "name" : "api_key",
        "in" : "header"
      },
      "basic_auth" : {
        "type" : "http",
        "scheme" : "basic"
      }
    }
  }
}