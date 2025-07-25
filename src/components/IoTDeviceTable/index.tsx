import React from "react";
import {
  Wifi,
  WifiOff,
  Zap,
  Thermometer,
  Droplet,
  Box,
  Loader,
} from "lucide-react";
import { Sensor } from "../../types/sensor";
import { PaginatedMessages } from "../../types/message";
import Pagination from "../commons/Pagination";
import { useDashboardContext } from "../../context/DashboardContext";

interface IoTDeviceTableProps {
  devices: Sensor[];
  pagination?: PaginatedMessages;
  loading?: boolean;
}

const IoTDeviceTable: React.FC<IoTDeviceTableProps> = ({
  devices,
  pagination,
  loading = false,
}) => {
  const { filters, setFilters } = useDashboardContext();

  const handlePageChange = (newPage: number) => {
    setFilters({ ...filters, page: newPage });
  };
  const getStatusBadge = (status?: string, isOnline?: boolean) => {
    if (!isOnline) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <WifiOff className="w-3 h-3 mr-1" />
          Off
        </span>
      );
    }

    const statusConfig = {
      on: "bg-green-100 text-green-800",
      ok: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      active: "bg-green-100 text-green-800",
      off: "bg-gray-100 text-gray-800",
      inactive: "bg-gray-100 text-gray-800",
    };

    const bgColor = status
      ? statusConfig[status as keyof typeof statusConfig]
      : "bg-gray-100 text-gray-300";

    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${bgColor}`}
      >
        <Wifi className="w-3 h-3 mr-1" />
        {status || "Unknown"}
      </span>
    );
  };

  const getDeviceIcon = (sensorType: string, customIcon?: React.ReactNode) => {
    if (customIcon) return customIcon;

    const iconMap = {
      relay: <Zap className="w-4 h-4" style={{ color: "#2DD843" }} />,
      temperature: (
        <Thermometer className="w-4 h-4" style={{ color: "#2DD843" }} />
      ),
      humidity: <Droplet className="w-4 h-4" style={{ color: "#2DD843" }} />,
      generic: <Box className="w-4 h-4" style={{ color: "#2DD843" }} />,
    };

    return iconMap[sensorType as keyof typeof iconMap] || iconMap.generic;
  };

  const getOnlineIndicator = (isOnline?: boolean) => {
    return (
      <div className="flex items-center">
        <div
          className={`w-2 h-2 rounded-full mr-2 ${
            isOnline ? "bg-green-400" : "bg-red-400"
          }`}
        />
        <span
          className={`text-sm font-medium ${
            isOnline ? "text-green-700" : "text-red-700"
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
    );
  };

  return (
    <>
      <div
        className="w-full overflow-hidden shadow-lg rounded-lg"
        style={{ backgroundColor: "#27391C" }}
      >
        <div className="overflow-x-auto">
          <table className="w-screen">
            <thead style={{ backgroundColor: "#27391C" }}>
              <tr className="border-b border-green-400">
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Device
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Online Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Topic
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Last Update
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-400">
              {devices?.map((device, index) => (
                <tr
                  key={index}
                  className="hover:bg-green-900 hover:bg-opacity-20 transition-colors duration-200"
                  style={{ backgroundColor: "#27391C" }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center">
                        {getDeviceIcon(
                          device.sensorType || "generic",
                          device.customIcon
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">
                          {device.deviceName || device.title}
                        </div>
                        <div className="text-sm text-gray-300 capitalize">
                          {device.sensorType}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getOnlineIndicator(device.isOnline)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(device.status, device.isOnline)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-300 font-mono bg-[#24361a] px-2 py-1 rounded">
                      {device.topic}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">
                      <span
                        className="font-semibold"
                        style={{ color: "#2DD843" }}
                      >
                        {device.value}
                      </span>
                      {device.unit && (
                        <span className="text-gray-300 ml-1">
                          {device.unit}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {new Date(device.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {loading && <Loader />}

        {devices.length === 0 && (
          <div className="text-center py-12">
            <Box className="mx-auto h-12 w-12 text-gray-500" />
            <h3 className="mt-2 text-sm font-medium text-gray-300">
              No devices
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              No IoT devices found to display.
            </p>
          </div>
        )}
      </div>
      <div className="">
        {pagination && (
          <Pagination
            currentPage={pagination.page}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default IoTDeviceTable;
