"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { XCircle } from "lucide-react";

export function DataTableToolbar({ table }) {
  const [customerName, setCustomerName] = useQueryState(
    "customer",
    parseAsString.withDefault("")
  );

  const [status, setStatus] = useQueryState(
    "status",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const clearFilters = () => {
    setCustomerName("");
    setStatus([]);
  };

  const toggleStatus = (val) => {
    setStatus((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4">
      <div className="flex flex-1 gap-2">
        <Input
          placeholder="Search customer..."
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filter Status</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem
              checked={status.includes("Green")}
              onCheckedChange={() => toggleStatus("Green")}
            >
              Green
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={status.includes("Red")}
              onCheckedChange={() => toggleStatus("Red")}
            >
              Red
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={clearFilters}
          className="text-destructive"
        >
          <XCircle className="w-4 h-4 mr-2" />
          Clear
        </Button>
      </div>
    </div>
  );
}
