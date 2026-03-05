import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";


const BannerSearchBar = () => {
  return (
    <div
      className="flex flex-col md:flex-row gap-3 items-center bg-white p-5 rounded-lg shadow-md
                relative md:absolute md:bottom-36 md:left-1/2 md:-translate-x-1/2 z-10"
    >
      {/* search by text */}
      <div className="flex items-center gap-1 w-full md:w-auto">

      <Search className="text-muted"/>

        <Input
          className="flex-1 border-b-2 border-gray-300 placeholder:text-muted rounded-none py-6"
          placeholder="Job title or keyword"
        />
      </div>

      {/* filter by dropdown */}
      <div className="flex items-center gap-1 w-full md:w-auto">
       <MapPin className="text-muted"/>

        <Select>
          <SelectTrigger className="w-full md:w-45 py-6">
            <SelectValue placeholder= "Location" className="placeholder:text-muted" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Dhaka">Dhaka</SelectItem>
              <SelectItem value="Sylhet">Sylhet</SelectItem>
              <SelectItem value="Rajshahi">Rajshahi</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full md:w-auto btn-space">Search My Job</Button>
    </div>
  );
};

export default BannerSearchBar;
