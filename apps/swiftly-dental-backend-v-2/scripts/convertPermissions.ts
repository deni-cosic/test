import { readFileSync, writeFileSync } from "fs";
import { permission } from "process";

export interface Permission {
  _id: ID;
  type: string;
  controller: string;
  action: string;
  enabled: boolean;
  policy: string;
  createdAt: AtedAt;
  updatedAt: AtedAt;
  __v: V;
  role: ID;
}

export interface V {
  $numberInt: string;
}

export interface ID {
  $oid: string;
}

export interface AtedAt {
  $date: DateClass;
}

export interface DateClass {
  $numberLong: string;
}

export interface Grant {
  role: string;
  resource: string;
  action: string;
  attributes: string;
}

const actionMap: Record<string, string> = {
  findone: "read:own",
  find: "read:any",
  create: "create:any",
  delete: "delete:any",
  update: "update:any",
};

const roleMap: Record<string, string> = {
  "5ecd104104146836d88b8b4c": "authenticated",
  "5ed8fd000a82990374163265": "manager",
  "5eeb73ce6fb464001d31b9b2": "practice_owner",
  "5ecd104104146836d88b8b4d": "public",
};

function logTypes(permissions: Permission[]) {
  const uniqueTypes = new Set();

  permissions.forEach((permission) => {
    uniqueTypes.add(permission.type);
  });
}

function logActions(permissions: Permission[]) {
  const uniqueActions = new Set();

  permissions.forEach((permission) => {
    uniqueActions.add(permission.action);
  });
}

function filterPermissions(permissions: Permission[], types: string[]) {
  return permissions.filter((permission) => types.includes(permission.type));
}

function clearAndUpper(text: string) {
  return text.replace(/-/, "").toUpperCase();
}

function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function convertData(permissions: Permission[]): Grant[] {
  const filteredPermissions = filterPermissions(permissions, [
    "application",
    "users-permissions",
  ]);

  const grants = filteredPermissions.reduce(
    (acc: Grant[], permission: Permission) => {
      let action = actionMap[permission.action];

      if (!action) {
        return acc;
      }

      const grant: Grant = {
        action,
        role: roleMap[permission.role.$oid],
        resource: toPascalCase(permission.controller),
        attributes: "*",
      };
      acc.push(grant);

      return acc;
    },
    [] as Grant[]
  );

  const sortedGrants = grants.sort((a, b) => {
    if (a.resource === "User") {
      return -1;
    }
    if (b.resource === "User") return 1;

    return a.resource.toLowerCase().localeCompare(b.resource.toLowerCase());
  });
  return sortedGrants;
}

async function main(args: string[]) {
  const data = JSON.parse(readFileSync("../permissions.json").toString());
  console.log(args);
  if (args[2] === "convert") {
    const grants = convertData(data);
    console.log(grants);
    writeFileSync("grants.json", JSON.stringify(grants));
  } else if (args[2] === "log-types") {
    logTypes(data);
  } else if (args[2] === "log-actions") {
    logActions(data);
  }
}

main(process.argv);
